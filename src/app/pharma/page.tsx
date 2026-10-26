import { AudienceView, audienceMetadata } from "@/components/AudienceView";

export const metadata = audienceMetadata("pharma");
export default function Page() {
  return <AudienceView slug="pharma" />;
}
