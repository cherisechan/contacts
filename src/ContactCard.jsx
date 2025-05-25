function ContactCard({ contact }) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Website:</strong>{" "}
          <a href={`http://${contact.website}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            {contact.website}
          </a>
        </p>
        <p className="text-gray-600">
          <strong>Company:</strong> {contact.company.name}
        </p>
      </div>
    );
}
  
export default ContactCard;
  