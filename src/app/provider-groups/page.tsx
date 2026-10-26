import { AudienceView, audienceMetadata } from "@/components/AudienceView";

export const metadata = audienceMetadata("provider-groups");
export default function Page() {
  return <AudienceView slug="provider-groups" />;
}
