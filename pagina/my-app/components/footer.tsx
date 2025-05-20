export default function Footer() {
  return (
    <footer className="bg-[#003865] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div>
          <h4 className="font-semibold mb-2">ITSOEH</h4>
          <p>Huejutla de Reyes, Hidalgo</p>
          <p>C.P. 43000</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <p>Email: contacto@itsoeh.edu.mx</p>
          <p>Tel: (789) 123 4567</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Enlaces útiles</h4>
          <ul className="space-y-1">
            <li><a href="/directorio" className="hover:underline">Directorio</a></li>
            <li><a href="/mapa" className="hover:underline">Mapa del campus</a></li>
            <li><a href="/calendario" className="hover:underline">Calendario escolar</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-sm border-t border-white/30 pt-4">
        © {new Date().getFullYear()} ITSOEH - Todos los derechos reservados
      </div>
    </footer>
  );
}
