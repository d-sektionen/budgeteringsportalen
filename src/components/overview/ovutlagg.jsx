import './overview.scss';
import Title from '../mainpage/textbox/title.jsx';
import LeftTextBox from '../mainpage/textbox/lefttextbox.jsx';
import MultilineBox from '../mainpage/textbox/multilinebox';

function OvUtlagg({ content }) {
    const textContentUser = [
        {
            title: 'LiU-id',
            temp: "liuid",
        },
        {
            title: 'Namn',
            temp: "name",
        },
        {
            title: 'Ort',
            temp: 'Linköping',
        },
        {
            title: 'Datum',
            temp: "date",
        },
    ];
    return (
        <>
            <div id='ovUtlagg'>
                <Title titleText={"Utlägg"} />
                <div className='textboxRow grid-2-1'>
                    <MultilineBox
                        title='Ändamål med inköpet'
                        placeholder='Jag köpte dessa saker för att...'
                        isFormik={false}
                    />
                    <div>
                        <p className="">{"Utskott"}</p>
                        <p className="">{content.utskott}</p>
                    </div>
                </div>
                < div id='ovUtlaggContent'>
                    {textContentUser.map((box, i) => (
                        <LeftTextBox
                            title={box.title}
                            temp={box.temp}
                            id={box.name}
                            key={i}
                            isFormik={false}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default OvUtlagg;
