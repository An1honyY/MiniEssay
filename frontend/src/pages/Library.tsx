import { Link } from "react-router-dom";

function Library() {

    function previewNote(): String {
        const note = localStorage.getItem('editorContent');
        const noteJson = JSON.parse(note ?? '');

        const headingObject = noteJson.find((item: { type: string; }) => item.type === 'heading');
        const noteHeading = headingObject ? headingObject.content[0].text : 'Heading not found';

        return noteHeading;
    }
    return (
        <div className='container mx-auto pt-6'>
            <h1>Library</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center rounded-box border max-w-md p-4">

                    <Link to="./read">{previewNote()}</Link>

                </div>
            </div>
        </div>
    );
}

export default Library;