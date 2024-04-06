import Location from "../model/location.model.js";

export async function createLocation(req, res) {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ msg: "location data not found" });
  }
}

// const publisher = await Publisher.findById({_id: book.publisher})
//       publisher.publishedBooks.push(book);
//       await publisher.save();

export const getLocations = async  (req, res) => {
  try {
    const locations = await Location.find();
    if(!locations){
      return res.status(404).json({msg:"No Locations found"});
    }
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error});
  }
}

export const getLocationById = async  (req, res) => {
  try {
    const id = req.params.id;
    const locationExist = await Location.findById(id);
    if (!locationExist) {
      return res.status(404).json({ msg: 'Locations not found' });
    }
    res.status(200).json(locationExist);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const updateLocation = async  (req, res) => {
  try {
    const id = req.params.id;
    const locationExist = await Location.findById(id);
    if(!locationExist){
      return res.status(401).json({msg:'The ID does not exist.'});
    }
    const updateLocation = await Location.findByIdAndUpdate(id, req.body ,{new:true}) ;
    res.status(200).json(updateLocation);
  } catch (error) {
    res.status(500).json({ error: error});
  }
}

export const deleteLocation = async  (req, res) => {
  try {
    const id = req.params.id;
    const locationExist = await Location.findById(id);
    if(!locationExist){
        return res.status(404).json('No location with this id was found');
    }
    await Location.findByIdAndDelete(id);
    res.status(200).json({ msg: " Location Delete Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}