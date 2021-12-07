
#include<iostream>
#include<fstream>
#include<cstring>

#define VERSION 0.1


typedef enum {
    META_COMMAND_SUCCESS,
    META_COMMAND_UNRECOGNIZED_COMMAND
} MetaCommandResult;

typedef enum {
    DATASET_UPDATE_SUCCESS,
    DATASET_UPDATE_UNRECOGNIZED_DATASET,
    DATASET_UPDATE_SERVER_FAILURE,
    DATASET_UPDATE_COMPUTED_HASH_MISMATCH
} DatasetUpdateResult;

typedef enum {
    DATASET_OPEN_SUCCESS,
    DATASER_OPEN_FILE_ERROR,
    DATASET_OPEN_COMMAND_ERROR,
    DATASET_OPEN_READ_ERROR
} DatasetOpenResult;


typedef struct {
    std::ofstream file;     // pointer to file
    off_t file_length;      // length in bits
    char* hash;              // local hash of dataset
    char* origin;           // link to remote origin server
} Dataset;



Dataset* open_file(const char* filename) {
    Dataset* dataset = new Dataset;
    dataset->file.open(filename, std::ios::in | std::ios::binary);
    if(!dataset->file.is_open()) {
        std::cerr << "Unable to open file " << filename << ".\n";
    }

    // get file length 
    std::streampos fsize = 0;
    fsize = dataset->file.tellp();
    dataset->file.seekp( 0, std::ios::end );

    dataset->file_length = dataset->file.tellp() - fsize;
    dataset->file.clear();
    dataset->file.seekp(0);

    // extract hash, size, search for origin

    return dataset;
}

MetaCommandResult do_meta_command(const char* command) {
    if(strcmp(command, "--version") == 0) {
        std::cout << "braket version : " << std::to_string(VERSION) << "." << std::endl;
        exit(EXIT_SUCCESS);
    } else if (strcmp(command, "--help") == 0 || strcmp(command, "--h") == 0) {
        // TODO: complete the help section when all commands are done.
        std::cout << "" << std::endl;

    } else {
        return META_COMMAND_UNRECOGNIZED_COMMAND;
    }
}




int main(int argc, char argv[]) {
    if(argc < 2) {
        std::cerr << "\nInvalid Syntax. Use: braket [./file.dataset] or [command]. Do --help for command options.\n" << std::endl;
        exit(EXIT_FAILURE);
    } else if (argc == 2) {
        if( strcmp(argv[1], "--") == 0) {
            switch(do_meta_command(argv[1])) {
                case(META_COMMAND_SUCCESS):
                    break;
                case(META_COMMAND_UNRECOGNIZED_COMMAND):
                    std::cerr << "Unrecognized command, " << argv[1] << ". Do --help for a list of all commands." << std::endl;
                    continue;
            }
        }

    }
}
