import { AudienceView, audienceMetadata } from "@/components/AudienceView";

export const metadata = audienceMetadata("dental-dsos");
export default function Page() {
  return <AudienceView slug="dental-dsos" />;
}
