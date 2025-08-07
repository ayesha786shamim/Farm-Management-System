import React, { useState } from 'react';
import '../../Styles/Product-style.css';

const categories = ['All', 'Fertilizers', 'Pesticides', 'Weed'];

const CategorySelector: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState('Fertilizers');

    return (
        <div className="flex justify-center">
            <div className="flex bg-white p-1 rounded-full shadow-md gap-4">

                {categories.map((category) => (
                    <button
                        key={category}

                        onClick={() => setActiveCategory(category)}

                        className={`input-font input-font-semibold text-[12px] px-6 py-2 rounded-full transition-all duration-300

                            ${activeCategory === category

                                ? 'bg-gradient-custom-opposite-diagonal text-white'
                                : 'input-fontBG input-textForestGreen'

                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;


// import '../../Styles/Product-style.css';

// interface CategorySelectorProps {

//     activeCategory: string;
//     onCategoryChange: (category: string) => void;

// }

// const categories = ['All', 'Fertilizer', 'Pesticides', 'Weed'];

// const CategorySelector: React.FC<CategorySelectorProps> = ({ activeCategory, onCategoryChange }) => {

//     console.log('Category selector Filters');

//     return (

//         <div className="flex justify-center">

//             <div className="flex bg-white p-2 rounded-full shadow-md  gap-6">

//                 {/* //create button for ech category */}
//                 {categories.map((category) => (

//                     <button
                    
//                         key={category}

//                         onClick={() => onCategoryChange(category)}

//                         className={`input-font font-semibold text-[12px] 
//                          w-[135px] py-2 rounded-full transition-all duration-300

//                          ${activeCategory === category
//                                 ? 'bg-gradient-custom-opposite-diagonal text-white'
//                                 : 'input-fontBG input-textForestGreen'
//                             }`}

//                     >

//                         {category}

//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CategorySelector;

