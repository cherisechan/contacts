import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-10 w-full mx-auto bg-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">My Contacts</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading contacts...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
