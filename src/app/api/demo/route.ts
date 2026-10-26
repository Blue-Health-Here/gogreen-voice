import { NextResponse } from "next/server";

// Wire this to your CRM (HubSpot, Salesforce), email provider, or Slack webhook.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.name) return NextResponse.json({ ok: false }, { status: 400 });
  console.log("[demo-request]", { name: body.name, email: body.email, company: body.company, orgType: body.orgType });
  return NextResponse.json({ ok: true });
}
