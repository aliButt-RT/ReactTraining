import React, { useState } from 'react';
import "./../App.css";
import Gallery from "./../Folder1/showPic";
import ShoppingList from "./../Folder1/randerList";
import ProductFilter from "./../Folder1/ProductFilter";
import MainLayout from '../Layout/MainLayout';

function App() {
  const [activeTab, setActiveTab] = useState('gallery');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

    return (
      <MainLayout>
            <div className="App">
                <nav className="navigation">
                    <button
                    className={activeTab === 'gallery' ? 'active' : ''}
                    onClick={() => handleTabChange('gallery')}
                    >
                    Gallery
                    </button>
                    <button
                    className={activeTab === 'productFilter' ? 'active' : ''}
                    onClick={() => handleTabChange('productFilter')}
                    >
                    Product Filter
                    </button>
                </nav>

                <div className="content">
                    {activeTab === 'gallery' && <Gallery />}
                    {activeTab === 'shoppingList' && <ShoppingList />}
                    {activeTab === 'productFilter' && <ProductFilter />}
                </div>
            </div>
      </MainLayout>
    
  );
}

export default App;
