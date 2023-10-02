// Requiring schema model
const Input = require("../models/schemas")

// controller function for render home page
module.exports.home= async function(req,res){
	// find all existing habits from DB
	const habitShow= await Input.find({});
	// rendering home page
    return res.render("home",{
        heading:"Habit Tracker",
		HabitsObj:habitShow
    })
}

// controller function for create habit and completion days into DB
module.exports.input=async function(req,res){
    try{
		if(req.body.HabitName){
			const input = await Input.findOne({HabitName:req.body.HabitName})
			// Checking whether that habit name already present in DB
			// if not then create one
			if(!input){
				console.log("Habit not avaialable")
				Input.create({
					HabitName:req.body.HabitName,
					Days:req.body.Days
				})
				// return back to home page after creation
				return res.redirect('back');
			}
			// if habit name already available then return back to home page
			if(input){
				return res.redirect('back');
			}
		}
	}
	catch(err){
		console.log("Error in creating data into DB",err)
	}

}

// controller function for edit days of completion of any particular habit

module.exports.edit=async function(req,res){
	// checking whether update input data is been passed on request
	// if not then take me to modal so there i can enter my new completion day
	if(!req.body.HabitName){
		const Update= await Input.findById(req.params.id);
		res.render("modal",{
			HabitObj:Update
		})
		return
	}
	// if update input data is passed through request then use that and update
	if(req.body.HabitName){
		// find that element using its unique id from DB and update
	    const data=await Input.findByIdAndUpdate(req.params.id,{Days: req.body.HabitName})
		if(data){
			// finding the new updated object
			const updatedObj= await Input.findById(req.params.id);
			// if updated days is lower than total completion days
			if(updatedObj.Days < updatedObj.DaysCount){
				// then update the completion day same as total days
				await Input.findByIdAndUpdate(req.params.id,{DaysCount: habitShow.Days})
			}
		}
		return res.redirect("/");
	};
};

// controller function to delete any particular habit
module.exports.destroy=async function(req,res){
	// find and delete habit using unique object id
	let habit=await Input.findByIdAndDelete(req.params.id);
	return res.redirect("/")

}

// controller function to increase the completion days count
module.exports.daysCount=async function(req,res){
	// finding habit object by its unique id
	const habitObj= await Input.findById(req.params.id);
	// increase its value by one
	var UpdateDay=habitObj.DaysCount +=1
	// increment happen only when the completion day is less than or equal to total day count
	// so completion day won't exceed total days
	if(UpdateDay <= habitObj.Days){
	    await Input.findByIdAndUpdate(req.params.id,{DaysCount:UpdateDay})
	}
	return res.redirect("/")

}