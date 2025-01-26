import React, {useState} from 'react'
import './TagSearch.css'
import { Input } from '@/components/ui/input'


export default function TagSearch({options, results, setResults}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setDropdownVisible(true);
    };

    const handleSelectItem = (item) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }

        if (!results.includes(item)) {
            setResults([...results, item])
        }
        setSearchTerm('');
        setDropdownVisible(false);
    };

    const handleRemoveItem = (item) => {
        setSelectedItems(selectedItems.filter((i) => i !== item));
        setResults(results.filter((i) => i != item))
    };


    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='tagsearch'>
            <Input id='procre-tag' 
                value={searchTerm}
                onChange={handleSearchChange} 
                placeholder="Search for a tag" />

            {dropdownVisible && searchTerm && (
                <div className="tagsearch-dropdown-menu">
                {filteredOptions.map((option, index) => (
                    <button className='tagsearch-dropdown-item' key={index} onClick={() => handleSelectItem(option)}>
                    {option}
                    </button>
                ))}
                </div>
            )}

        <div className="tagsearch-selected-items">
            {selectedItems.map((item, index) => (
            <div key={index} className="tagsearch-selected-item">
                <div className='tagsearch-selectes-item-left'>
                    {item}
                </div>
                
                <button onClick={() => handleRemoveItem(item)} className="remove-button">
                &times;
                </button>
            </div>
            ))}
        </div>

        </div>

        

        
  )
}
