import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = () => {
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the dropped files
		const file = acceptedFiles[0]; // Assuming you only want to handle one file at a time
		console.log(file);

		// Convert the file to a File object
		const fileObj = new File([file], file.name, { type: file.type });

		// Save the file to the public folder
		saveFileToPublicFolder(fileObj);

		setUploadSuccess(true);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className="flex mx-auto text-center items-center justify-center font-extrabold text-gray-500 hover:cursor-pointer p-2 text-xl flex-col h-24  border-4 md:w-[80%] border-dashed border-stone-400 bg-yellow-50">
			<div
				{...getRootProps()}
				className="w-full h-full text-center hover:cursor-pointer"
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the file here ...</p>
				) : (
					<p>Select or drop to find the similar product</p>
				)}
			</div>
			{uploadSuccess && (
				<p className="p-3 font-semibold text-green-700 bg-green-200">
					File uploaded successfully!
				</p>
			)}
		</div>
	);
};

const styles = {
	dropzone: {
		border: "2px dashed #ccc",
		borderRadius: "4px",
		padding: "20px",
		height: "300px",
		textAlign: "center",
		cursor: "pointer",
	},
};

export default FileDropzone;

const saveFileToPublicFolder = (file) => {
	const reader = new FileReader();
	reader.onload = () => {
		const fileContent = reader.result;
		const publicFolderPath = `${window.location.origin}/public/uploadedImages`;
		const filePath = `${publicFolderPath}${file.name}`;

		// Create a temporary link element
		const link = document.createElement("a");
		link.href = fileContent;
		link.download = file.name;

		// Append the link element to the document
		document.body.appendChild(link);

		// Trigger the click event to download the file
		link.click();

		// Remove the link element from the document
		document.body.removeChild(link);
	};
	reader.readAsDataURL(file);
};
