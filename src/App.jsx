import { useState } from 'react';

    function App() {
      const [mediaUrl, setMediaUrl] = useState('');
      const [mediaFiles, setMediaFiles] = useState([]);
      const [isPlaying, setIsPlaying] = useState(false);
      const [selectedFile, setSelectedFile] = useState(null);

      const handleUrlChange = (event) => {
        setMediaUrl(event.target.value);
      };

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setMediaFiles([...mediaFiles, file]);
      };

      const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
      };

      const handleFileSelect = (file) => {
        setSelectedFile(file);
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Media Player</h1>

          <div className="mb-4">
            <label htmlFor="mediaUrl" className="block mb-2 text-gray-700">
              Media URL:
            </label>
            <input
              type="text"
              id="mediaUrl"
              className="border rounded-md px-3 py-2 w-full"
              placeholder="Enter video or audio URL"
              value={mediaUrl}
              onChange={handleUrlChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mediaFile" className="block mb-2 text-gray-700">
              Choose a file:
            </label>
            <input
              type="file"
              id="mediaFile"
              className="border rounded-md px-3 py-2 w-full"
              accept="audio/*, video/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="mb-4">
            <ul className="list-disc">
              {mediaFiles.map((file, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="mr-2">{file.name}</span>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleFileSelect(file)}
                  >
                    Play
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            {(mediaUrl || selectedFile) && (
              <video
                src={mediaUrl || URL.createObjectURL(selectedFile)}
                controls
                autoPlay={isPlaying}
                className="w-full"
              />
            )}
            {(mediaUrl || selectedFile) && (
              <audio
                src={mediaUrl || URL.createObjectURL(selectedFile)}
                controls
                autoPlay={isPlaying}
                className="w-full"
              />
            )}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePlayPause}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      );
    }

    export default App;
