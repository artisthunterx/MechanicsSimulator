function addConstant(name, value) {
	variables[name] = {
		dependencies: [],
		calculate: function() {
			return value;
		},
		value: null
	};
}

function addDependent(name, dependencies, calculateFn) {
	variables[name] = {
		dependencies: dependencies,
		calculate: calculateFn,
		value: null
	};
}

function figureOut(padding, name) {
	var variable = variables[name];
	if (variable == undefined) {
		throw "Could not figure out " + name;
	}

	if (variable.value != null) {
		console.log(padding + name + " = " + variable.value + " (calculated earlier)");
		return variable.value;
	} else {
		console.log(padding + name + " = ?");
	}
	
	var valueOfDependencies = [];
	for (var i = 0; i < variable.dependencies.length; i++) {
		valueOfDependencies[i] = figureOut(padding + "  ", variable.dependencies[i]);
	}
	
	var value = variable.calculate.apply(null, valueOfDependencies);
	console.log(padding + name + " = " + value);

	variable.value = value;

	return value;
}

addConstant("g", 9.8)
addConstant("m", 6350)
addConstant("mu", 0)
addConstant("theta", 40)
addConstant("t", 2)

addDependent("Fg", ["m", "g", "theta"], function(m, g, theta) {
	return m * g * Math.cos(theta);
})

addDependent("Fr", ["R", "mu"], function(R, mu) {
	return mu * R;
});

addDependent("R", ["w", "theta"], function(w, theta) {
	return w * Math.sin(theta);
})

addDependent("w", ["m", "g"], function(m, g) {
	return m * g;
})

addDependent("F", ["Fg", "Fr"], function(Fg, Fr) {
	return Fg - Fr;
});

addDependent("a", ["F", "m"], function(F, m) {
	return F / m;
});

addDependent("v", ["t", "a"], function(t, a) {
	return a * t;
});

addDependent("s", ["t", "a"], function(t, a) {
	return 0.5 * a * t * t;
});

// To run
figureOut("", nameOfYourVariable)