import React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";

const TableProduct = ({ products, searchQuery, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({}); 
  const [deleteIndex, setDeleteIndex] = useState(null); 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditClick = (index, product) => {
    setEditIndex(index);
    setEditedData(product); 
  };

  const handleSaveClick = (id) => {
    onEdit(id, editedData); 
    setEditIndex(null); 
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedData({}); 
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index); 
  };

  const handleConfirmDelete = (id) => {
    onDelete(id); 
    setDeleteIndex(null); 
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null); 
  };

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
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredProducts.length === 0 ? (
            <TableRow>
              <TableCell colSpan="8" className="text-center text-white">
                No results found
              </TableCell>
            </TableRow>
          ) : (
            filteredProducts.map((product, index) => (
              <TableRow key={product.id} className="text-white">
                {editIndex === index ? (
                  <>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <input
                        type="text"
                        value={editedData.name}
                        onChange={(e) =>
                          setEditedData({ ...editedData, name: e.target.value })
                        }
                        className="bg-gray-700 text-white p-1 rounded"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        value={editedData.bred_for || ""}
                        onChange={(e) =>
                          setEditedData({ ...editedData, bred_for: e.target.value })
                        }
                        className="bg-gray-700 text-white p-1 rounded"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        value={editedData.breed_group || ""}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            breed_group: e.target.value,
                          })
                        }
                        className="bg-gray-700 text-white p-1 rounded"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        value={editedData.life_span || ""}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            life_span: e.target.value,
                          })
                        }
                        className="bg-gray-700 text-white p-1 rounded"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        value={editedData.temperament || ""}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            temperament: e.target.value,
                          })
                        }
                        className="bg-gray-700 text-white p-1 rounded"
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="text"
                        value={editedData.reference_image_id || ""}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            reference_image_id: e.target.value,
                          })
                        }
                        className="bg-gray-700 text-white p-1 rounded"
                      />
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        onClick={() => handleSaveClick(product.id)}
                        className="bg-green-500 text-white hover:bg-green-600"
                        size="sm"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={handleCancelEdit}
                        className="bg-red-500 text-white hover:bg-red-600"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.bred_for || "N/A"}</TableCell>
                    <TableCell>{product.breed_group || "N/A"}</TableCell>
                    <TableCell>{product.life_span}</TableCell>
                    <TableCell>{product.temperament || "N/A"}</TableCell>
                    <TableCell>{product.reference_image_id || "N/A"}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        onClick={() => handleEditClick(index, product)}
                        className="bg-slate-700 text-white hover:bg-white hover:text-teal-950"
                        size="sm"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteClick(index)}
                        className="bg-white text-teal-900 hover:bg-slate-700 hover:text-white"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

     
      {deleteIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to delete this item?</p>
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() =>
                  handleConfirmDelete(filteredProducts[deleteIndex].id)
                }
                className="bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </Button>
              <Button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white hover:bg-gray-600"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableProduct;
