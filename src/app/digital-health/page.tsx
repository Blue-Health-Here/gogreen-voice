import { AudienceView, audienceMetadata } from "@/components/AudienceView";

export const metadata = audienceMetadata("digital-health");
export default function Page() {
  return <AudienceView slug="digital-health" />;
}
