def simInsertions(numIndices, numInsertions):
    """Assumes numIndices and numInsertions are positive ints.
        Returns 1 if there is a collision; 0 otherwise"""

    choices = range(numIndices) #list of possible numIndices
    used = []
    for i in range(numInsertions):
        hashVal = random.choice(choices)
        if hashVal in used: #there is a collision
            return 1
        else:
            used.append(hashVal)
    return 0

    def findProb(numIndices, numInsertions, numTrials):
        collision = 0
        for t in range(numTrials):
            collisions += simInsertions(numIndices, numInsertions)
        return collisions/numTrials
    
