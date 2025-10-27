import React, { useState } from "react";
interface UserProps {
  name: string;
  initialAge?: number; 
}


function greetUser(name: string): string {
  return `Hello, ${name}!`;
}


const UserCounter: React.FC<UserProps> = ({ name, initialAge = 18 }) => {
 
  const [age, setAge] = useState<number>(initialAge);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const increaseAge = (): void => {
    setAge(age + 1);
  };

  const toggleAdmin = (): void => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      <h2>{greetUser(name)}</h2>
      <p>Age: {age}</p>
      <p>Status: {isAdmin ? "Admin" : "User"}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={toggleAdmin}>
        Toggle Admin
      </button>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div>
      <UserCounter name="Alice" initialAge={25} />
      <UserCounter name="Bob" />
    </div>
  );
};

export default App;
