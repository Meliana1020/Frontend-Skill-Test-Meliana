import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

const TableProduct = ({ products, searchQuery }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto p-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead>No</TableHead>
            <TableHead>Dog Breed Name</TableHead>
            <TableHead>Bred For</TableHead>
            <TableHead>Racial Group</TableHead>
            <TableHead>Average Age</TableHead>
            <TableHead>Temperament</TableHead>
            <TableHead>Reference Image ID</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredProducts.length === 0 ? (
            <TableRow>
              <TableCell colSpan="7" className="text-center text-white">
                No results found
              </TableCell>
            </TableRow>
          ) : (
            filteredProducts.map((product, index) => (
              <TableRow key={product.id}
              className="text-white">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.bred_for || "N/A"}</TableCell>
                <TableCell>{product.breed_group || "N/A"}</TableCell>
                <TableCell>{product.life_span}</TableCell>
                <TableCell>{product.temperament || "N/A"}</TableCell>
                <TableCell>{product.reference_image_id || "N/A"}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableProduct;
