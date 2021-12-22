import "../App.css";
import Profile from "../components/Profile";

// Search component with api request
// API Request
const ProfilePage = () => {
  const person = [
    {
      firstName: "Bob",
      lastName: "Smith",
      job: "Software Engineer",
      hobby: "Basketball",
    },
    {
      firstName: "Joe",
      lastName: "Boe",
      job: "Chef",
      hobby: "Soccer",
    },
    {
      firstName: "Joe",
      lastName: "Boe",
      job: "Chef",
      hobby: "Soccer",
    },
  ];
  return (
    <>
      <Profile information={person} />
    </>
  );
};

export default ProfilePage;
