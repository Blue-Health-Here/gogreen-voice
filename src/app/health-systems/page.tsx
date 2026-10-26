import { AudienceView, audienceMetadata } from "@/components/AudienceView";

export const metadata = audienceMetadata("health-systems");
export default function Page() {
  return <AudienceView slug="health-systems" />;
}
