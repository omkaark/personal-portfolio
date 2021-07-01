import Text from './Text';
import Button from './Button';

import './Announcement.scss';

import { getColour } from '../util/colourUtil';

const Announcement = ({buttonText, styles, children}) => {
    console.log(buttonText);
    const buttonLength = buttonText.length + 2 + "ex";
    let announcementStyle = styles;
    console.log(announcementStyle);
    return (
        <div className="announcement" style={announcementStyle}>
            <Text>
                {children}
            </Text>
            <Button styles={{textAlign: "center", marginTop: "15px", height: "45px", width: buttonLength}} settings={{whenClicked: () => console.log(1), text: buttonText}} />
        </div>
    );
};

export default Announcement;