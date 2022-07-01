import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'
import ContentList from '../ContentList';

function Content(props) {
   const { currentCategory } = props;

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <ContentList category={currentCategory.name}></ContentList>
        </section>
    )
}

export default Content;