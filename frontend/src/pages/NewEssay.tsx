import { useRef } from 'react';
import BundledEditor from './components/BundledEditor'

function NewEssay() {
    const editorRef = useRef<any>(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
        return (
            <>
                <h1 className='justify-self-centre'>New Essay</h1>
                <BundledEditor
                    onInit={(_evt: any, editor: any) => editorRef.current = editor}
                    initialValue='<p>This is the initial content of the editor.</p>'
                    init={{
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
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button onClick={log}>Log editor content</button>

            </>
        )
    }
    export default NewEssay