import { useRef } from 'react';
import BundledEditor from './components/BundledEditor'

function NewEssay() {
    const editorRef = useRef<any>(null);
    let editorContent = editorRef.current?.getContent();

    const save = () => {
        if (editorRef.current) {
            editorContent = editorRef.current?.getContent();

            // Display the editor content in the output div as a preview of the text minus the HTML tags
            const output = 'output';
            const outputElement = document.getElementById(output);
            if (outputElement) {
                outputElement.innerHTML = editorContent;
            }

            log();
        }
    };
    const log = () => {
        if (editorRef.current) {
            console.log(editorContent);
        }
    };

    return (
        <div className='container mx-auto pt-6'>
            <h1>New Essay</h1>

            <BundledEditor
                onInit={(_evt: any, editor: any) => editorRef.current = editor}
                initialValue='<p>...</p>'
                init={{
                    selector: 'textarea',  // change this value according to your HTML
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
                        'searchreplace', 'table', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Arial,Helvetica,sans-serif; font-size:14px }',
                    skin: 'oxide-dark',
                    content_css: 'dark',
                }}
            />
            <button className='btn bg-primary m-6 font-bold text-primary-content' onClick={save}>Save</button>
                <div id="output" className='border'></div>

        </div>
    )
}
export default NewEssay