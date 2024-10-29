import Button from "../utils/Button";

function Profile() {
  return (
    <div className="flex items-center mb-">
      <Button className="flex items-center">
        <div className="rounded-full overflow-hidden w-10">
          <img
            src="https://recruiteq-frontend.vercel.app/assets/images/avatar/person1.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </Button>
    </div>
  );
}

export default Profile;
