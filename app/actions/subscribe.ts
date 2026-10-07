"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SubscribeResult =
  | { success: true }
  | { success: false; error: string };

export async function subscribe(formData: FormData): Promise<SubscribeResult> {
  const email = String(formData.get("email") || "").trim();

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // If no API key configured, silently succeed (for preview/staging)
  if (!process.env.RESEND_API_KEY) {
    console.log(`[ADHD for CEOs] Interest signup (no key): ${email}`);
    return { success: true };
  }

  try {
    // 1. Add contact to Resend audience
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      });
    }

    // 2. Send confirmation email to the person who signed up
    await resend.emails.send({
      from: "ADHD for CEOs <hello@adhdceos.org>",
      to: email,
      subject: "You're on the list — ADHD for CEOs",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You're on the list</title>
</head>
<body style="margin:0;padding:0;background:#080808;font-family:'Inter',system-ui,sans-serif;color:#ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;padding:48px 32px;">
    <tr>
      <td>
        <!-- Logo wordmark -->
        <p style="font-size:13px;font-weight:700;letter-spacing:0.15em;color:#2bbfbf;text-transform:uppercase;margin:0 0 40px 0;">
          ADHD for CEOs
        </p>

        <!-- Headline -->
        <h1 style="font-size:32px;font-weight:700;line-height:1.2;color:#ffffff;margin:0 0 20px 0;">
          You're on the list.
        </h1>

        <!-- Body -->
        <p style="font-size:16px;line-height:1.7;color:rgba(255,255,255,0.6);margin:0 0 16px 0;">
          Thank you for your interest in ADHD for CEOs.
        </p>
        <p style="font-size:16px;line-height:1.7;color:rgba(255,255,255,0.6);margin:0 0 16px 0;">
          We're at the very beginning — building something for ADHD entrepreneurs, founders, and unconventional thinkers who are tired of being told to just focus.
        </p>
        <p style="font-size:16px;line-height:1.7;color:rgba(255,255,255,0.6);margin:0 0 32px 0;">
          We'll reach out as the community takes shape. No noise — only the things that matter.
        </p>

        <!-- Quote -->
        <div style="border-left:2px solid #2bbfbf;padding-left:20px;margin:0 0 40px 0;">
          <p style="font-size:15px;line-height:1.7;color:rgba(255,255,255,0.5);font-style:italic;margin:0;">
            "Maybe you were never the problem."
          </p>
        </div>

        <!-- Divider -->
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0 0 32px 0;" />

        <!-- Footer -->
        <p style="font-size:12px;color:rgba(255,255,255,0.25);margin:0;">
          ADHDCEOs.org &mdash; A nonprofit initiative.<br />
          You received this because you signed up at adhdceos.org.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    });

    // 3. Notify founder
    const founderEmail = process.env.FOUNDER_EMAIL || "hvilchis-zu@alumni.unav.es";
    await resend.emails.send({
      from: "ADHD for CEOs <hello@adhdceos.org>",
      to: founderEmail,
      subject: `New signup: ${email}`,
      html: `<p style="font-family:sans-serif;">New interest signup: <strong>${email}</strong></p>`,
    });

    return { success: true };
  } catch (err) {
    console.error("[subscribe] Resend error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
