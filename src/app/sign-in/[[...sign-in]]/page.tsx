import { SignIn } from "@clerk/nextjs";
import "./signIn.css";
export default function Page() {
  return (
    <div>
      <div className="main-div">
        <SignIn />
      </div>
    </div>
  );
}
