import React from 'react'

export default function Tag(props) {
    return (
        <span className="tag">{props.name ? (props.name):("Default")}</span>
    )
}
