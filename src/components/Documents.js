import React, { Component } from 'react'

export class Documents extends Component {
    render() {
        return (
            <div className="downloads">
                <div>
                    <a href="documents/resume.docx" download="Resume-Zwe Lin Htet">
                    <i class="mr-4 fas fa-file-download fa-2x"></i>
                    Resume
                    </a>
                </div>
                <div>
                    <a href="documents/academic_transcript.pdf" download="Transcript-Zwe Lin Htet">
                    <i class="mr-4 fas fa-file-alt fa-2x"></i>
                    Academic Transcript
                    </a>
                </div>
            </div>
        )
    }
}

export default Documents

