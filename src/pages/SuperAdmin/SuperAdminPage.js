import React from 'react';
import ProductList from '../../components/Product/ProductList';
import CustomerList from '../../components/Customer/CustomerList';
import ShopList from '../../components/Shop/ShopList';
import Addshop from '../../components/Shop/AddShop'

function SuperAdminPage() {
  return (
    <div>
      <h2>Super Admin Portal</h2>
      <ProductList />
      <CustomerList />
      <ShopList />
      <Addshop/>
    </div>
  );
}

export default SuperAdminPage;
