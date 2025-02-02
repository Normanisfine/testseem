import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="flex items-center justify-center">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
}