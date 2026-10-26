import { AudienceView, audienceMetadata } from "@/components/AudienceView";

export const metadata = audienceMetadata("rcm-companies");
export default function Page() {
  return <AudienceView slug="rcm-companies" />;
}
