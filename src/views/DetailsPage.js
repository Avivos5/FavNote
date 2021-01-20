import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/index';

const DetailsPage = ({ match }) => {
    return (
        <>
            <DetailsTemplate>
                <>
                    <h1>Tytuł</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque!
                        Perspiciatis placeat perferendis excepturi laboriosam, sunt, repudiandae
                        tempore quos ipsam earum hic sapiente? Dolore iure enim quia aliquam amet
                        ipsa.
                    </p>
                    <p>{`jesteśmy na note: ${match.path === routes.note}`}</p>
                    <p>{`jesteśmy na twitter: ${match.path === routes.twitter}`}</p>
                    <p>{`jesteśmy na article: ${match.path === routes.article}`}</p>

                    {console.log(match)}
                </>
            </DetailsTemplate>
        </>
    );
};

export default DetailsPage;
