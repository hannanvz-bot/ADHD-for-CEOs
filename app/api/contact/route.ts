import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { formType, ...fields } = body;

  // Build subject and HTML based on form type
  let subject: string;
  let html: string;

  if (formType === "challenger") {
    subject = `[ADHD for CEOs] New Challenge Submission — ${fields.company || "Unknown company"}`;
    html = `
      <h2>New Challenge Submission — Rent My Brain</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
        <tr><td style="color:#666;width:160px;vertical-align:top;">Company</td><td><strong>${esc(fields.company)}</strong></td></tr>
        <tr><td style="color:#666;vertical-align:top;">Email</td><td>${esc(fields.email)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Expertise needed</td><td>${esc(fields.expertise)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Challenge</td><td style="white-space:pre-wrap;">${esc(fields.challenge)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Expected outcome</td><td style="white-space:pre-wrap;">${esc(fields.outcome || "—")}</td></tr>
      </table>
      <p style="margin-top:24px;font-size:12px;color:#999;">Submitted via adhdceos.org/rent-my-brain</p>
    `;
  } else if (formType === "brain") {
    subject = `[ADHD for CEOs] New Brain Application — ${fields.name || "Unknown"}`;
    html = `
      <h2>New Brain Application — Rent My Brain</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
        <tr><td style="color:#666;width:160px;vertical-align:top;">Name</td><td><strong>${esc(fields.name)}</strong></td></tr>
        <tr><td style="color:#666;vertical-align:top;">Email</td><td>${esc(fields.email)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Country</td><td>${esc(fields.country)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Skills</td><td style="white-space:pre-wrap;">${esc(fields.skills)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Portfolio</td><td>${esc(fields.portfolio || "—")}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Availability</td><td>${esc(fields.availability)}</td></tr>
        <tr><td style="color:#666;vertical-align:top;">Motivation</td><td style="white-space:pre-wrap;">${esc(fields.motivation || "—")}</td></tr>
      </table>
      <p style="margin-top:24px;font-size:12px;color:#999;">Submitted via adhdceos.org/rent-my-brain</p>
    `;
  } else if (formType === "connect") {
    subject = `[ADHD for CEOs] New Community Sign-up — ${fields.name || "Unknown"}`;
    html = `
      <h2>New Community Sign-up</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
        <tr><td style="color:#666;width:160px;vertical-align:top;">Name</td><td><strong>${esc(fields.name)}</strong></td></tr>
        <tr><td style="color:#666;vertical-align:top;">Email</td><td>${esc(fields.email)}</td></tr>
        ${fields.role ? `<tr><td style="color:#666;vertical-align:top;">Role</td><td>${esc(fields.role)}</td></tr>` : ""}
        ${fields.message ? `<tr><td style="color:#666;vertical-align:top;">Message</td><td style="white-space:pre-wrap;">${esc(fields.message)}</td></tr>` : ""}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#999;">Submitted via adhdceos.org</p>
    `;
  } else {
    return NextResponse.json({ error: "Unknown form type." }, { status: 400 });
  }

  const plainText = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ADHD for CEOs <noreply@ostal.es>",
        to: ["Ostal.community@gmail.com"],
        reply_to: fields.email ? [fields.email] : undefined,
        subject,
        html,
        text: plainText,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

function esc(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
