from pulp import *

def optimize_decision(delay_risk):

    if delay_risk == 0:
        return {
            "decision": "No Action Required",
            "cost": 0
        }

    problem = LpProblem("SupplyPrescript", LpMinimize)

    air = LpVariable("AirFreight", cat="Binary")
    supplier = LpVariable("SecondarySupplier", cat="Binary")
    delay = LpVariable("DelayLaunch", cat="Binary")

    problem += (
        air * 15000 +
        supplier * 10000 +
        delay * 5000
    )

    problem += air + supplier + delay == 1

    problem.solve()

    if air.varValue == 1:
        return {
            "decision": "Use Air Freight",
            "cost": 15000
        }

    if supplier.varValue == 1:
        return {
            "decision": "Use Secondary Supplier",
            "cost": 10000
        }

    return {
        "decision": "Delay Product Launch",
        "cost": 5000
    }