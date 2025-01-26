'use client'

import Modal from '@/components/modal/Modal';
import React, {useState, useEffect} from 'react';
import { ChevronLeft } from 'lucide-react';
import { FileVideo } from 'lucide-react';
import { Input } from "@/components/ui/input"
import './ArtifactCreate.css';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
  } from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


export default function ArtifactCreate({show, onClose}) {

    //content switch
    const [content, setContent] = useState('video');

    //artifact type
    const [selectedTypes, setSelectedTypes] = useState('');
    const [artifactTypes, setArtifactTypes] = useState([]);
    
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedEra, setSelectedEra] = useState('');

    const [description, setDescription] = useState('');


    const [selectedModel, setSelectedModel] = useState('');



    useEffect(() => {
        // Fetch artifact types from the API
        const fetchArtifactTypes = async () => {
          try {
            const response = await fetch('http://127.0.0.1:4523/m1/4570922-4219543-default/api/3d/artifact-types');
            const data = await response.json();
            if (data && Array.isArray(data.types)) {
              setArtifactTypes(data.types);
              console.log(artifactTypes);
            } else {
              console.error('API response does not contain a valid types array:', data);
            }
          } catch (error) {
            console.error('Error fetching artifact types:', error);
          }
        };
    
        fetchArtifactTypes();
      }, []);

      useEffect(() => {
        console.log('Updated artifactTypes:', artifactTypes);
      }, [artifactTypes]);

    const nextContent = () => {
        switch (content) {
          case 'video':
            setContent('info');  // Switch to 'about' from 'home'
            break;
          case 'info':
            setContent('model');  // Switch to 'contact' from 'about'
            break;
      }
    };

    const previousContent = () => {
        switch (content) {
          case 'info':
            setContent('video');  // Switch to 'home' from 'about'
            break;
          case 'model':
            setContent('info');  // Switch to 'about' from 'contact'
            break;
      }
    };

    const handleClose = () => {
        onClose();
        setContent('video');
    };
    
    const handleCreate = () => {
        onClose();
        setContent('video');
    };

    
    const infoProps = {
        artifactTypes,
        selectedTypes,
        setSelectedTypes,
        selectedLocation,
        setSelectedLocation,
        selectedEra,
        setSelectedEra,
        description,
        setDescription,
      };

  return (
    
    <Modal show={show} onClose={onClose}>
        <div className='articreate-main'>
            <button  onClick={handleClose} >
                <ChevronLeft/>
            </button>

            {content === 'video' && (
                <>
                    <Video />
                    <div className='articreate-bottom'>
                        <button className='black' onClick={nextContent}>Next</button>
                    </div>
                </>
            )}
            {content === 'info' && (
                <>
                <Info {...infoProps} />
                <div className='articreate-bottom '>
                    <button className='white' onClick={previousContent}>Back</button>
                    <button className='black' onClick={nextContent}>Next</button>
                </div>
                </>

            )}
            {content === 'model' && (
                <>
                    <Model selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
                    <div className='articreate-bottom ' >
                        <button className='white' onClick={previousContent}>Back</button>
                        <button className='black' onClick={handleCreate}>Create</button>
                    </div>
                </>
                
            )}

        </div>
    </Modal>
  )
}


function Video () {
    return (
        <div className='articreate-video'>
            <h2>Upload Video</h2>

            <div className='upload-area'>
                <FileVideo />

                <div className='text-1'>Click to upload or drag and drop</div>
                <div className='text-2'>MP4</div>

            </div>

        </div>
        
    )
}

function Info (
    {
        artifactTypes,
        selectedTypes,
        setSelectedTypes,
        selectedLocation,
        setSelectedLocation,
        selectedEra,
        setSelectedEra,
        description,
        setDescription,
      }
) {

    const locations = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Australia', 'South America'];
    const eras = [
      '2000 BC', '1500 BC', '1000 BC', '500 BC', '0', '500 AD', '1000 AD', '1500 AD', '2000 AD'
    ];

    return (
        <div className='articreate-info'>
            <h2>Information</h2>

            <div className='info-frame'>
                <h3 className='text-1'>Name</h3>
                <Input 
                    className='text-2'
                    placeholder='New Project' />
            </div>

            <div className='info-frame'>
                <h3 className='text-1'>Artifact type / Material</h3>

                <Select value={selectedTypes} onValueChange={setSelectedTypes}>
                    <SelectTrigger className="w-full" >
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                    {artifactTypes.map((type, index) => (
                        <SelectItem key={index} value={type}>
                        {type}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                
            </div>

            <div className='info-frame'>
        <h3 className='text-1'>Geographical Location</h3>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-full" >
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Locations</SelectLabel>
              {locations.map((location, index) => (
                <SelectItem key={index} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='info-frame'>
        <h3 className='text-1'>Date/Era</h3>
        <Select value={selectedEra} onValueChange={setSelectedEra}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an era" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Date/Era</SelectLabel>
              {eras.map((era, index) => (
                <SelectItem key={index} value={era}>
                  {era}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='info-frame'>
        <h3 className='text-1'>Description</h3>
        <textarea
          className='text-2'
          placeholder='Enter description here...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
            

        </div>
    )
}

function Model ({selectedModel,setSelectedModel}) {
    
    const models = ['Model 1', 'Model 2', 'Model 3', 'Model 4'];

    return (

        <div className='articreate-model'>

            <h2>AI Model</h2>

            <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Model</SelectLabel>
                    {models.map((model, index) => (
                        <SelectItem key={index} value={model}>
                        {model}
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
             </Select>

             <div className='models-info'>
                <ScrollArea className='h-[20rem] w-full rounded-md '>

                    <div className='p-2'>
                        <h3>Model 1</h3>
                        <p>Base model: ChatGPT 4o</p>
                        <p>Processing speed: 30 min average</p>
                        <p>Basic unit price: $0.1/mb</p>
                        <p>Pro unit price: $0.25/mb</p>

                    </div>

                    <Separator />

                    <div className='p-2'>
                        <h3>Model 2</h3>
                        <p>Base model: ChatGPT 4o</p>
                        <p>Processing speed: 30 min average</p>
                        <p>Basic unit price: $0.1/mb</p>
                        <p>Pro unit price: $0.25/mb</p>
                    </div>

                    <Separator />

                    <div className='p-2'> 
                        <h3>Model 3</h3>
                        <p>Base model: ChatGPT 4o</p>
                        <p>Processing speed: 30 min average</p>
                        <p>Basic unit price: $0.1/mb</p>
                        <p>Pro unit price: $0.25/mb</p>
                    </div>

                </ScrollArea>
             </div>

        </div>
    )
}