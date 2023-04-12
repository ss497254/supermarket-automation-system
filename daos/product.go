package daos

import (
	"hypermarket/database"
	"hypermarket/entities"
)

func CreateProduct(product *entities.Product) error {
	_, err := database.DB.Exec("insert into products(name, price, quantity) values($1, $2, $3)", product.Name, product.Price, product.Quantity)

	return err
}

func GetProducts() (*[]entities.Product, error) {
	rows, err := database.Query("Select * from products")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products = []entities.Product{}

	for rows.Next() {
		var product = entities.Product{}

		err := rows.StructScan(&product)
		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return &products, nil
}

func GetProductById(id int) (*entities.Product, error) {
	row := database.QueryRow("Select * from products where id=$1", id)

	var product = entities.Product{}

	err := row.StructScan(&product)
	if err != nil {
		return nil, err
	}

	return &product, nil
}

func UpdateProductById(id uint32) error {
	return nil
}

func DeleteProductById(id uint32) error {
	return nil
}
