

const GoogleMap = () => {
  return (
    <div className="flex ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974602.1437826417!2d82.47685836171873!3d17.409885969756925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614b4f4a59bb3%3A0xb3020f01228612de!2sLight%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1723539794818!5m2!1sen!2sin"
        
        
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-72 rounded-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
