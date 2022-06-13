import React from 'react';
import { ActivityListItem } from './ActivityListItem';

const activities = [
    {
        title: 'Sequences',
        description: 'An activity where you are given a set of numbers, and must calculate a series of calculations to solve for the resulting sequence. This covers addition, subtraction, and multiplication; sorting is also an available operation.',
        link: 'activity/sequences'
    }, {
        title: 'Next Number',
        description: 'An activity where you are given a series of operations that must be performed on a starting number repeatedly. After a couple of cycles, the activity will finish after the completion of several operations from the original number.',
        link: 'activity/next-number'
    }, {
        title: 'Sentences',
        description: 'An activity in which you must order words from a randomly selected sentence. You can select the option of sorting from words in alphabetical order, longest to shortest length (or vice versa), and backwards.',
        link: 'activity/sentences'
    }
];

// once getStats implemented, put in the props below
const generateActivitiesArray = () => {
    var actsArray = [];
    for(var i = 0; i < activities.length; i++) {
        actsArray.push(
            <ActivityListItem 
            title={activities[i].title} desc={activities[i].description} link={activities[i].link } />
            );
    }

    return actsArray;
}

export const ActivityList = () => {

    return (
    <div className='text-center'>
        {generateActivitiesArray()}
    </div>
    );
}