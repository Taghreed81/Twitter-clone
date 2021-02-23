import React from 'react';

import Profile from './Profile';


export default {
    title: 'Example/Profile',
    component: Profile,
    argTypes: {
    },
};

const Template = (args) => (
    <div>
        <ProfileBox {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
};
