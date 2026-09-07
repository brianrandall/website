import maxpat from './img/body/maxpat.gif'
import screen from './img/body/screen.gif' 
import live from './img/wm/live.png'
import max from './img/wm/max.png'
import ReactPlayer from 'react-player'

export const projectInfo = [
    {
        title: 'body language',
        description: [
            'This was a project made for a gallery opening in an apartment complex in Portland, OR.',
            'The room consisted of a number of different 3D structures that were projected onto, and a hexagonal cube that was interacted with by the those in attendance, along with a number of IR sensors placed throughout the room.',
            'There was a WiFi enabled arduino that was connected to a MAX/MSP patch that was responsible for sending OSC messages to the handful of other applications that were running to live render video content and audio in Ableton Live.',
        ],
        tech: ['MAX/MSP', 'OSC', 'Arduino', 'Ableton Live', 'Quartz Composer', 'JavaScript', 'MadMapper', 'VDMX'],
        carousel: [
            <img src={maxpat} alt="maxpat" width='100%'/>,
            <img src={screen} alt="screen" width='100%'/>,
        ],
        links: []
    },
    {
        title: 'wildman',
        description: [
            'This was one of a few videos I created for the band Sun Drug, done so via a very close collaboration with the band',
            'Utilizing the IR camera from an XBox Kinect, a dual layer real time mask was created in VDMX, and projected onto a live model.',
            'We had a budget of approximately $20 and some pizza, so rather than buying a DMX interface, I wrote an arduino sketch to control our lights via a MAX/MSP patch and serial communication.',
            'All the light sequences and projected visuals were triggered live via OSC messages sent out from Ableton Live.',
            'The final video was about 98% live, with the exception of a few minor edits in post.',
            'Premeire: Creators Project (VICE.COM)'
        ],
        tech: ['MAX/MSP', 'OSC', 'Arduino', 'Ableton Live', 'XBox Kinect', 'MadMapper', 'Quartz Composer', 'Syphon', 'DMX', 'VDMX', 'Projection Mapping'],
        carousel: [
            <ReactPlayer url='https://www.youtube.com/watch?v=5ylzqrVbGCQ' width='100%' controls={true} />,
            <img src={live} alt="live" width='100%'/>,
            <img src={max} alt="max" width='100%'/>,
        ],
        links: [
            {
                title: 'Creators Project (VICE.COM) feature',
                link: 'https://www.vice.com/en/article/53w59z/premiere-projection-mapping-pasty-bodies-in-sun-drugs-wildman-video'
            },
            {
                title: 'VDMX blog post',
                link: 'https://vdmx.vidvox.net/blog/brian-randall-project-maps-pasty-bodies-in-sun-drugs-wildman-video'
            }
        ]

    },
    {
        title: 'soaked',
        description: [
            'Another video created for Sun Drug, this time with a marginally larger budget (maybe a few hundred dollars this time).',
            'All the lights were programmed ahead of time this time, and the video was made using the XBox Kinect and a beta release of Depthkit Studio.',
            'All the drone footage was actually edited together in Ableton to ensure that all the edits were perfectly in sync with the music.',
            'If you look closely, in one of the shots you can see me sitting inside the cube, controlling the fog machinne, sending audio out to the band members, triggering all the light sequences, and talking via walkie talkie to the guy flying the drone.... lol',
            'Premeire: Creators Project (VICE.COM)'
        ],
        tech: ['DepthKit', 'XBox Kinect', 'Ableton Live', 'Arduino', 'MAX/MSP', 'OSC', 'DMX', 'VDMX', 'MadMapper'],
        carousel: [
            <ReactPlayer url='https://www.youtube.com/watch?v=fPWKMrfainU' width='100%' controls={true} />,
            <ReactPlayer url='https://www.youtube.com/watch?v=xpV--hRAm4I' width='100%' controls={true} />,
            <ReactPlayer url='https://www.youtube.com/watch?v=fczrC4lfMK4' width='100%' controls={true} />,
            <ReactPlayer url='https://www.youtube.com/watch?v=XS2lte-7weg' width='100%' controls={true} />,
        ],
        links: [
            {
                title: 'Creators Project (VICE.COM) feature',
                link: 'https://www.vice.com/en/article/jpva34/sun-drug-soaked-exclusive'
            },
        ],
    },
    {
        title: 'brain wave viz',
        description: [
            'A brain wave visualization built in close collaboration with a friend of mine for part gallery exhibit, part Cal Arts portfolio submission.',
            'This project was built as part of a body of work for a portfolio submission to Cal Arts, which I was later accepted to.',
            'The NeuroSky Mindset was used to read brain wave data, which was then sent to a PureData where the array of signals were averaged down to one value, which was then sent to Quartz Composer to render a live vizualization.',
            'PureData was also handling the audio generation and serial communication with an Arduino, which was controlling a DMX light',
        ],
        tech: ['PureData', 'Arduino', 'DMX', 'Quartz Composer', 'MadMapper', 'NeuroSky Mindset'],
        carousel: [
            <ReactPlayer url='https://vimeo.com/80764408' width='100%' controls={true} />
        ],
        links: []
    }
]
