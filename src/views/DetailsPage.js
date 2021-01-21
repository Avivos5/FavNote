import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const DetailsPage = ({ match }) => {
    const pageType = match.url.split('/')[1];

    const dummyArticle = {
        id: 1,
        title: 'Wake me up when Vue ends',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tortor vel libero fermentum, eu consectetur ex cursus. Cras malesuada erat ut ex tempus molestie. In ac ex dictum, elementum magna vitae, hendrerit tellus. In venenatis id ex a posuere. Nulla ipsum metus, suscipit sed ligula vitae, pellentesque ullamcorper felis. Nullam quis sem dignissim, vulputate metus non, placerat orci. Curabitur id ex sit amet urna elementum rutrum in non justo. Sed tempus urna id egestas tincidunt. Morbi posuere dapibus enim, non varius nisi pharetra ut. Vestibulum in maximus nibh. Aenean fermentum nibh risus, a varius ipsum dictum eget. Proin a pharetra ex. Integer nec velit nunc. Quisque elementum non ligula quis imperdiet.',
        twitterName: 'hello_roman',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day'
    };

    return (
        <>
            <DetailsTemplate
                pageType={pageType}
                title={dummyArticle.title}
                created={dummyArticle.created}
                content={dummyArticle.content}
                articleUrl={dummyArticle.articleUrl}
                twitterName={dummyArticle.twitterName}
            />
        </>
    );
};

export default DetailsPage;
