// Footer.jsx

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-500">
              RutiStore is your one-stop destination for quality products and exceptional customer service. 
              Explore our wide range of items and shop with confidence.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-500">
              Address: 123 Ruti Street, Cityville, Country<br />
              Phone: +123 456 789<br />
              Email: info@rutistore.com
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mb-8">
          {/* Social media icons */}
        </div>
        <p className="text-gray-500">&copy; 2024 RutiStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
