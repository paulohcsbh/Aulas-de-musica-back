import trackRepository from "../repositories/track-repository";


async function allTracks() {
    const tracks = await trackRepository.getAllTracks();
    return tracks
};

const trackService = {
    allTracks
};

export default trackService;