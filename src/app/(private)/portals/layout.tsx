import PortalLayoutProvider from "@/providers/PortalLayoutProvider";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div>
        <PortalLayoutProvider>{children}</PortalLayoutProvider>
      </div>
    </div>
  );
}
