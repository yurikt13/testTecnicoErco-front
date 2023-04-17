export type Cities = {
    ID_CITY: string
    NAME: string,
    ID_STATE: string,
    POPULATION: string
    
}

export type initialStateCities = {
    cities: Cities[] | [] | null
}