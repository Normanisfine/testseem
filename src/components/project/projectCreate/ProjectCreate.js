import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/navigation';
import './ProjectCreate.css';
import Modal from '@/components/modal/Modal';
import { ChevronLeft } from 'lucide-react';
import { Input } from "@/components/ui/input"
import TagSearch from '@/components/tag/tagSearch/TagSearch';
import TagSuggest from '@/components/tag/tagSuggest/TagSuggest';
import { Images } from 'lucide-react';


const searchOptions = ['Egypt Pharaohs', 'Archaeology', 'Indigenous Art', 'Documentary Photography']
const suggestOptions = [
    "Default",
    "Cultural Heritage",
    "Archaeology",
    "Impressionism",
    "Renaissance",
    "Indigenous Art",
    "Architecture",
    "Documentary Photography",
    "Scientific Illustration",
    "AR Experience",
    "Mythology"
];



export default function ProjectCreate({ show, onClose}) {

    const [projectName, setProjectName] = useState('New Project')
    const [results, setResults] = useState([]);
    const [bannerImage, setBannerImage] = useState(null);
    const fileInputRef = useRef(null);
    const router = useRouter();

    const handleNameChange = (e) => {
        setProjectName(e.target.value)
    }

    const handleClick = () => {
        fileInputRef.current.click();
      };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBannerImage(file);
        }
    };
    const handleDeleteFile = () => {
        setBannerImage(null);
        fileInputRef.current.value = null;
      };
    const handleDrop = (event) => {
        event.preventDefault();
        setBannerImage(event.dataTransfer.files[0]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const generateProjectID = () => {
        return '1'
    } //future
    
    const handleCreate = () => {
        //submit data
        const newID = generateProjectID();
        router.push(`/projects/${newID}`);
    }

    useEffect(() => {
        console.log('Updated Name: ', projectName);
        console.log('Updated results:', results);
        console.log('Uploaded banner: ', bannerImage)
      }, [results]); //test
    


  return (
    <Modal show={show} onClose={onClose}>
      <div className='procre-main'>
        <button  onClick={onClose} >
            <ChevronLeft/>
        </button>
      
        <div className='procre-title'>
            <h2>
                New Project
            </h2>
        </div>

        <div className='procre-name'>
        <Input 
            onChange = {handleNameChange}
            placeholder='New Project' />
        </div>

        <div className='tag-frame'>
            <div className='tag-search-frame'>
                <h3>Tag</h3>
                <TagSearch options={searchOptions} results={results} setResults={setResults}/>
                
                <h4>Here are some tag suggestions for your new project</h4>
                <TagSuggest options={suggestOptions} results={results} setResults={setResults} />
            </div>
        </div>

        <div className='procre-banner'>
            <h3>Banner Image</h3>
            
            <div className='procre-banner-upload' 
                onClick={handleClick} 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                >
                <Images />

                <div className='text-1'>Click to upload or drag and drop</div>

                <div className='text-2'>JPG, PNG</div>
            </div>

            <Input
                id="banner"
                type="file"
                placeholder="File"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
            />
            {bannerImage && (
            <div className="flex items-center space-x-2">
              <p>Selected file: {bannerImage.name}</p>
              <button
                type="button"
                onClick={handleDeleteFile}
                className="text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          )}

           

        </div>

        <div className='procre-create'>
            <button onClick={handleCreate}>Create</button>
        </div>

      </div>
    </Modal>
  )
}


