/**
 *  API-Route für ALLE PRODUKTE, 

-> Liste aller Produkte 
aus einer Datenquelle (in diesem Fall getAllProducts() 
aus productServices.js) abzurufen und als JSON 
zurückzugeben.

Verwendung: Diese API wird vom Frontend verwendet, 
um die Produktliste dynamisch zu laden. 
Es liefert die Rohdaten für das Frontend.
Wenn du auf /api/products im Browser gehst, 
siehst du die JSON-Daten, die von diesem API-Endpunkt 
zurückgegeben werden. 
Diese Daten werden von der Frontend-Komponente 
(pages/products/index.js) genutzt.
 */
import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const allProducts = getAllProducts();
  response.status(200).json(allProducts);
  /* es geht auch : 
  res.status(200).json(getAllProducts()); */
}
